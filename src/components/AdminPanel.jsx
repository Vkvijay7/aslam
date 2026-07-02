import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, Trash2, Image, LogOut, Eye, Plus, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'aslam';
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Aslamadmine123@';
const STORAGE_BUCKET = 'showcase-images';

export default function AdminPanel({ onClose }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showTips, setShowTips] = useState(true);

  const fileInputRef = useRef(null);

  // ── Login Handler ──
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect username or password. Please try again.');
    }
  };

  // ── Fetch showcase items ──
  const fetchItems = async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('showcase_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error('Failed to fetch items:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchItems();
    }
  }, [authenticated]);

  // ── Image Preview ──
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // ── Upload & Create Item ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSuccessMsg('');

    if (!title.trim()) {
      setFormError('Title is required.');
      return;
    }
    if (!imageFile) {
      setFormError('Please select an image to upload.');
      return;
    }
    if (!supabase) {
      setFormError('Supabase is not configured. Check your .env file.');
      return;
    }

    setUploading(true);

    try {
      // 1. Upload image to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: urlData } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(filePath);

      const imageUrl = urlData.publicUrl;

      // 3. Insert into database
      const { error: insertError } = await supabase
        .from('showcase_items')
        .insert([{
          title: title.trim(),
          description: description.trim(),
          image_url: imageUrl,
        }]);

      if (insertError) throw insertError;

      // Success — reset form & refresh
      setTitle('');
      setDescription('');
      setImageFile(null);
      setImagePreview(null);
      setShowForm(false);
      setSuccessMsg('Item uploaded successfully!');
      if (fileInputRef.current) fileInputRef.current.value = '';
      await fetchItems();

      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      setFormError(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  // ── Delete Item ──
  const handleDelete = async (item) => {
    if (!supabase) return;
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return;

    try {
      // Delete from storage (extract path from URL)
      const url = new URL(item.image_url);
      const pathParts = url.pathname.split(`/storage/v1/object/public/${STORAGE_BUCKET}/`);
      if (pathParts.length > 1) {
        await supabase.storage.from(STORAGE_BUCKET).remove([pathParts[1]]);
      }

      // Delete from database
      const { error } = await supabase
        .from('showcase_items')
        .delete()
        .eq('id', item.id);

      if (error) throw error;
      await fetchItems();
    } catch (err) {
      alert(`Failed to delete: ${err.message}`);
    }
  };

  // ── Prevent body scroll when panel is open ──
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // ═══ LOGIN SCREEN ═══
  if (!authenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-black/40 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-evergreen rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-outfit text-2xl font-extrabold uppercase tracking-tight text-black">
              Admin Panel
            </h2>
            <p className="font-paragraph text-sm text-black/50 mt-1">
              Manage your Showcase gallery
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-outfit text-xs uppercase tracking-wider font-bold text-black/60 mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 border border-black/10 rounded-xl font-paragraph text-sm focus:outline-none focus:ring-2 focus:ring-evergreen/30 focus:border-evergreen transition-all"
                autoFocus
              />
            </div>

            <div>
              <label className="block font-outfit text-xs uppercase tracking-wider font-bold text-black/60 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-black/10 rounded-xl font-paragraph text-sm focus:outline-none focus:ring-2 focus:ring-evergreen/30 focus:border-evergreen transition-all"
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-xs font-outfit font-semibold">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-evergreen text-white font-outfit text-sm uppercase font-bold py-3.5 rounded-full tracking-wider hover:bg-evergreen-dark transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ═══ ADMIN DASHBOARD ═══
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      {/* Header Bar */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-evergreen rounded-xl flex items-center justify-center">
            <Image className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-outfit text-lg font-extrabold uppercase tracking-tight text-black leading-none">
              Showcase Admin
            </h1>
            <p className="font-paragraph text-xs text-black/40 mt-0.5">
              {items.length} item{items.length !== 1 ? 's' : ''} in gallery
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-evergreen text-white font-outfit text-xs uppercase font-bold px-5 py-2.5 rounded-full tracking-wider hover:bg-evergreen-dark transition-all active:scale-95 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
          <button
            onClick={onClose}
            className="p-2.5 text-black/40 hover:text-black border border-black/10 rounded-full transition-colors"
            title="Close Admin Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Success Message */}
        {successMsg && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl font-outfit text-sm font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {successMsg}
          </div>
        )}

        {/* Supabase Not Configured Warning */}
        {!supabase && (
          <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-800 px-5 py-4 rounded-xl">
            <p className="font-outfit text-sm font-bold uppercase tracking-wide mb-1">Supabase Not Configured</p>
            <p className="font-paragraph text-sm">
              Set <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">VITE_SUPABASE_URL</code> and{' '}
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">VITE_SUPABASE_ANON_KEY</code> in your{' '}
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">.env</code> file. See{' '}
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">.env.example</code> for details.
            </p>
          </div>
        )}

        {/* ── Upload Form ── */}
        {showForm && (
          <div className="mb-8 bg-white border border-black/10 rounded-2xl p-6 shadow-lg">
            <h3 className="font-outfit text-sm uppercase font-bold tracking-wider text-black mb-4">
              Add New Showcase Item
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider font-bold text-black/60 mb-1.5">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Modern Villa Exterior"
                  className="w-full px-4 py-3 border border-black/10 rounded-xl font-paragraph text-sm focus:outline-none focus:ring-2 focus:ring-evergreen/30 focus:border-evergreen transition-all"
                />
              </div>

              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider font-bold text-black/60 mb-1.5">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of this showcase item..."
                  rows={3}
                  className="w-full px-4 py-3 border border-black/10 rounded-xl font-paragraph text-sm focus:outline-none focus:ring-2 focus:ring-evergreen/30 focus:border-evergreen transition-all resize-none"
                />
              </div>

              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider font-bold text-black/60 mb-1.5">
                  Image *
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-black/10 rounded-xl p-6 cursor-pointer hover:border-evergreen/30 transition-colors flex flex-col items-center justify-center min-h-[160px] group"
                >
                  {imagePreview ? (
                    <div className="relative w-full">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <p className="text-white font-outfit text-xs uppercase font-bold">Click to change</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-black/20 mb-2 group-hover:text-evergreen/50 transition-colors" />
                      <p className="font-outfit text-xs text-black/40 uppercase tracking-wider font-semibold">
                        Click to upload image
                      </p>
                      <p className="font-paragraph text-xs text-black/30 mt-1">
                        JPG, PNG, WebP — max 10MB
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {formError && (
                <p className="text-red-500 text-xs font-outfit font-semibold">{formError}</p>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-evergreen text-white font-outfit text-xs uppercase font-bold px-8 py-3 rounded-full tracking-wider hover:bg-evergreen-dark transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Upload
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setFormError('');
                    setTitle('');
                    setDescription('');
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="font-outfit text-xs uppercase font-bold px-6 py-3 rounded-full tracking-wider border border-black/10 text-black/50 hover:text-black hover:border-black/20 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Gallery Grid ── */}
        <div>
          <h3 className="font-outfit text-sm uppercase font-bold tracking-wider text-black/60 mb-4">
            Gallery Items
          </h3>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-evergreen animate-spin" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-black/10 rounded-2xl">
              <Image className="w-12 h-12 text-black/10 mx-auto mb-3" />
              <p className="font-outfit text-sm uppercase font-bold text-black/30 tracking-wider">
                No items yet
              </p>
              <p className="font-paragraph text-xs text-black/20 mt-1">
                Click "Add Item" to upload your first showcase photo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative border border-black/5 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-outfit text-sm font-bold uppercase tracking-wide text-black truncate">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="font-paragraph text-xs text-black/50 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <p className="font-paragraph text-[10px] text-black/30 mt-2">
                      {new Date(item.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item)}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600 active:scale-90"
                    title="Delete this item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Help / Image Guide Card (Bottom Right) ── */}
      {showTips ? (
        <div className="fixed bottom-6 right-6 z-20 max-w-[320px] bg-slate-50 border border-black/10 p-5 rounded-2xl shadow-xl hidden md:block animate-fade-in">
          <button
            onClick={() => setShowTips(false)}
            className="absolute top-3 right-3 text-black/30 hover:text-black transition-colors"
            title="Hide guidelines"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <h4 className="font-outfit text-xs uppercase font-extrabold tracking-wider text-evergreen flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 bg-bright-gold rounded-full"></span>
            Photo Guidelines
          </h4>
          <ul className="space-y-2 text-xs font-paragraph text-black/75 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-evergreen font-bold mt-0.5">•</span>
              <span><strong>Shape:</strong> Use normal rectangular photos (taken sideways). The website automatically crops them for previews.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-evergreen font-bold mt-0.5">•</span>
              <span><strong>Resolution:</strong> 1920 × 1080 (HD) or 1600 × 1200 is best.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-evergreen font-bold mt-0.5">•</span>
              <span><strong>Format:</strong> WebP (best for loading speed), JPG, or PNG.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-evergreen font-bold mt-0.5">•</span>
              <span><strong>File Size:</strong> Keep images under 1.5MB so the page loads instantly.</span>
            </li>
          </ul>
        </div>
      ) : (
        <button
          onClick={() => setShowTips(true)}
          className="fixed bottom-6 right-6 z-20 bg-evergreen hover:bg-evergreen-dark text-white font-outfit text-xs uppercase font-bold px-4 py-3 rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2"
          title="Show guidelines"
        >
          <span className="w-2 h-2 bg-bright-gold rounded-full animate-ping"></span>
          💡 Photo Guidelines
        </button>
      )}
    </div>
  );
}
