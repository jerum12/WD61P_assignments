<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostsResource;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    //
    public function index()
    {
        //
        $posts= Posts::all();
        $response = ['code'=>200, 'message'=>'Posts retrieved successfully.','data'=>PostsResource::collection($posts)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $posts = Posts::create($input);
        $response = ['code'=>200,'message'=>'Posts created successfully!','data'=> new PostsResource($posts)];

        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //

        $posts = Posts::findOrFail($id);
        $response = ['code'=>200, 'message'=>'Posts successfully retrieved!','data'=> new PostsResource($posts)];

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $posts = Posts::findOrFail($id);

        $posts->update($input);
        $response =['code'=>200, 'message'=>'Posts successfully updated.','data'=> new PostsResource($posts)];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $posts = Posts::findOrFail($id);
        $posts->delete();

        $response = ['code'=> 200, 'message'=> 'Posts successfully deleted!'];
        return $response;
    }
}
