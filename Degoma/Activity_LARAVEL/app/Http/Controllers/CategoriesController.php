<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Models\CategoriesMOdel;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = CategoriesMOdel::all();
        $response = ['code' => 200, 'message'=>'Infomation successfully retrieved!', 'data'=> CategoriesResource::collection($categories)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        CategoriesMOdel::create($input);

        return $input;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $categories = CategoriesMOdel::find($id);
        return $categories;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();
        $categories = CategoriesMOdel::findOrFail($id);
        $categories->update($input);

        return $input;
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $categories = CategoriesMOdel::findOrFail($id);
        $categories->delete();

        return $id;
    }
}
