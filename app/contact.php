<?php

namespace App;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class contact extends Model
{
    public static function get_by_id($id){
      return DB::table('contacts')->where('id', $id)->get();
    }
    public static function generate(){
      $data['generated']=rand();
      $data['id']=DB::table('contacts')->insertGetId($data);
      return $data;
    }
}
