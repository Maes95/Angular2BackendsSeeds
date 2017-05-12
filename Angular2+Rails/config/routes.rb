Rails.application.routes.draw do

  root 'angular#index'
  get '*path', to: 'angular#index'

end
