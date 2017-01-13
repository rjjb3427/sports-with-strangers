class Api::EventsController < ApplicationController
  def index
    city = City.find(event_params[:city_id])
    @events = city.events
    if @events.empty?
      render json: ["No events scheduled in #{city.name}."], status: 422
    else
      render :index
    end
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :index
    else
      render json: @event.errors.full_messages
    end
  end

  def destroy
    debugger
    @event = Event.find(params[:id])
    @event.destroy
    render :template => 'api/cities/show'
  end

  private

  def event_params
    params.require(:event).permit(:city_id, :host_id, :title,
    :address, :sport, :time, :capacity)
  end
end
