class Api::AttendeesController < ApplicationController
  def create
    @attendee = Attendee.new(attendee_params)
    if @attendee.save
      render :show
    else
      render json: ["You are already attending this event"], status: 422
    end
  end

  def destroy
    @attendee = Attendee.find_by(attendee_params)
    @attendee.delete
    render :destroy
  end

  private
  def attendee_params
    params.require(:attendee).permit(:user_id, :event_id)
  end
end
