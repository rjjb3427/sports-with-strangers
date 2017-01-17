Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show ]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show]
    resources :events, only: [:index, :create, :update, :destroy]
    resources :attendees, only: [:create, :destroy]
  end
end
