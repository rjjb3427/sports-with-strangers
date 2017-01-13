Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create ]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show]
    resources :events, only: [:index, :create, :update, :destroy]
  end
end
