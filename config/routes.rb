Rails.application.routes.draw do
  resources :backlogs
  resources :games
  resources :consoles do
    resources :games
  end
  devise_for :users, controllers: { registrations: 'registrations' }
  namespace :api do
    namespace :v1 do
      get 'post/index'
      post :auth, to: 'authentication#create'
      get  '/auth' => 'authentication#fetch'
    end

    namespace :v2 do
      # Things yet to come
    end
  end
end
