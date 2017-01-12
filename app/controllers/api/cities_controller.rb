class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    # debugger
    @city = City.find(params[:id])
    if @city
      render :show
    else
      render json: ['City not found check show method']
    end
  end
end
