<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Models\CategoriesModel;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = CategoriesModel::all();
        $response = ['code' => 200, 'message' => 'Successfully retrieved category', 'categories' => CategoriesResource::collection($categories)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'category_name' => 'required|string',
        ]);

        $categories = new CategoriesModel();
        $categories->category_name = $request->input('category_name');
        $categories->save();

        $response = ['code' => 200, 'message' => 'Successfully created category', 'new_category' => new CategoriesResource($categories)];
        return $response;

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $categories = CategoriesModel::find($id);
        if (!$categories) {
            return response()->json([
                          'message' => 'Category not found'
                        ], 404);
        }

        $response = ['code' => 200, 'message' => 'Category successfully found', 'category' => new CategoriesResource($categories)];

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $categories = CategoriesModel::findOrFail($id);
        $categories->category_name = $request->input('category_name');
        $categories->save();

        $response = ['code' => 200, 'message' => 'Successfully Updated category', 'category' => new CategoriesResource($categories)];

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categories = CategoriesModel::findOrFail($id);
        $categories->delete();

        $response = ['code' => 200,'message' => 'Successfully deleted category', 'category' => new CategoriesResource($categories)];

        return $response;
    }
}
