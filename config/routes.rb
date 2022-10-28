Rails.application.routes.draw do
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :costumes do
    resources :reviews
  end
  resources :users

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
