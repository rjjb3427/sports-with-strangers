class Api::EventsController < ApplicationController
  def index
    # debugger
    if event_params[:city_id]
      city = City.find(event_params[:city_id])
      render json: ['City not found'], status: 404 if city.nil?
      @events = city.events
      render json: ["No events scheduled in #{city.name}."], status: 422 if @events.empty?
    elsif event_params[:host_id]
      host = User.find(event_params[:host_id])
      render json: ['User not found'], status: 404 if host.nil?
      @events = host.events
      render json: ["#{user.first_name} isn't hosting any events yet."], status: 422 if @events.empty?
    end
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :index
      # render template: 'api/users/show' TODO pass in host
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :index
    else
      render json: @event.errors.full_messages, status: 422
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
