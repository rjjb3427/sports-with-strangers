class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.id != current_user.id
      render json: ['Authentication Failed. Please Login.']
    elsif @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user && (@user.events.length > 0 || @user.id == current_user.id)
      render :detail
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password, :location, :image, :blurb)
  end
end
