# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_www_session',
  :secret      => 'dd155f1e5642cfa53981296481dfd9557c44aa6288fef9dd4f2238d42d4d4b3cb647e8faa5224afb0a27b816f03debcd3a0b8312bbe9ec9019c901a451fce236'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
