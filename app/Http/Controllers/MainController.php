<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;

class MainController extends Controller
{
  public function index(){
    $view = View::make('main');
    return $view;
  }
}
