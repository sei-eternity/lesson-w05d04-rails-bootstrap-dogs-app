Rails.application.routes.draw do
  root 'dogs#index'
  get 'bootstrap', to: 'dogs#bootstrap'
  resources :dogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
