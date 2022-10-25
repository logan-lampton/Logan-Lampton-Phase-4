Rails.application.routes.draw do
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  
  resources :reviews
  resources :costumes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
