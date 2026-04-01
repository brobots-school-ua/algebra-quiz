// Google Sign-In module using Google Identity Services
const Auth = {
  // Google OAuth Client ID (set via Auth.setClientId or GOOGLE_CLIENT_ID in config)
  CLIENT_ID: '660115412123-d4p20v0se8n5b18n7jk70dj4gps4e2jp.apps.googleusercontent.com',
  STORAGE_KEY: 'google_user',

  // Get current user from localStorage (or null)
  getUser() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) { return null; }
  },

  // Save user profile to localStorage
  _saveUser(profile) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
  },

  // Sign out
  signOut() {
    localStorage.removeItem(this.STORAGE_KEY);
    if (typeof google !== 'undefined' && google.accounts) {
      google.accounts.id.disableAutoSelect();
    }
    location.reload();
  },

  // Decode JWT ID token (no server verification needed for client-side)
  _decodeToken(token) {
    const payload = token.split('.')[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  },

  // Initialize Google Identity Services
  init(onSignIn) {
    if (typeof google === 'undefined' || !google.accounts) {
      console.warn('Google Identity Services not loaded');
      return;
    }

    google.accounts.id.initialize({
      client_id: this.CLIENT_ID,
      callback: (response) => {
        const payload = this._decodeToken(response.credential);
        const profile = {
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
          googleId: payload.sub,
          loginTime: new Date().toISOString()
        };
        this._saveUser(profile);
        if (onSignIn) onSignIn(profile);
      },
      auto_select: true,
      context: 'signin'
    });
  },

  // Render the sign-in button into a container element
  renderButton(containerId) {
    if (typeof google === 'undefined' || !google.accounts) return;
    const el = document.getElementById(containerId);
    if (!el) return;
    google.accounts.id.renderButton(el, {
      theme: 'filled_black',
      size: 'large',
      shape: 'pill',
      text: 'signin_with',
      locale: 'uk',
      width: 280
    });
  },

  // Show One Tap prompt
  prompt() {
    if (typeof google !== 'undefined' && google.accounts) {
      google.accounts.id.prompt();
    }
  },

  // Render logged-in user badge (HTML string)
  profileBadgeHTML(user) {
    return `
      <div class="user-badge">
        <img src="${user.picture}" alt="" class="user-avatar" referrerpolicy="no-referrer">
        <span class="user-name">${user.name}</span>
        <button onclick="Auth.signOut()" class="btn-signout" title="Вийти">✕</button>
      </div>`;
  }
};
