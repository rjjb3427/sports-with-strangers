class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid Email or Password'], status: 422
    end
  end

  def destroy
    render json: ['No user logged in'], status: 422 unless current_user
    @user = current_user
    logout(@user)
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :name, :password, :location, :image, :blurb)
  end
end
