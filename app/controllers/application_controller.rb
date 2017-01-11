class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout(user)
    user.session_token = User.generate_session_token
    user.save
  end

  def current_user
    @current_user ||=User.find_by(session_token: session[:session_token])
  end
end