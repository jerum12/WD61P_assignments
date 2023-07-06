<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    //
    public function index()
    {
        //
        $categories = Categories::all();
        $response = ['code'=>200, 'message'=>'Categories retrieved successfully.','data'=>CategoriesResource::collection($categories)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $categories = Categories::create($input);
        $response = ['code'=>200,'message'=>'Create categories successfully.','data'=> new CategoriesResource($categories)];

        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $categories = Categories::findOrFail($id);
        $response = ['code'=>200,'message'=>'Show category successfully.','data'=> new CategoriesResource($categories)];

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $categories = Categories::findOrFail($id);
        $categories->update($input);
        $response = ['code'=>200 , 'message'=> 'Category successfully updated.','data'=> new CategoriesResource($categories)];

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $categories = Categories::findOrFail($id);
        $response =['code'=>200,'message'=>'Category successfully removed.'];

        return $response;
    }
}
