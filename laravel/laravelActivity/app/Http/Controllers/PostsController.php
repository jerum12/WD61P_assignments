<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostsResource;
use App\Models\PostsModel;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = PostsModel::all();
        $response = ['code' => 200, 'message' => 'Successfully retrieved Posts!', PostsResource::collection($posts)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $posts = PostsModel::create($request->all());
        $response = ['code' => 201,'message' => 'Successfully created Posts!', new PostsResource($posts)];

        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(PostsModel $postsModel, $id)
    {
        //
        $posts = PostsModel::findOrFail($id);

        $response = ['code' => 200, 'message' => 'Successfully retrieved posts', 'posts' => new PostsResource($posts)];

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PostsModel $postsModel, $id)
    {
        //
        $request->validate([
            'title' =>'required|string',
            'content' =>'required|string',
        ]);

        $posts = PostsModel::findOrFail($id);
        $posts->update($request->all());
        $response = ['code' => 200,'message' => 'Successfully updated Posts!', new PostsResource($posts)];

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostsModel $postsModel, Request $request, $id)
    {
        //
        $posts = PostsModel::findOrFail($id);
        $posts->delete();
        $response = ['code' => 200,'message' => 'Successfully deleted Posts!', 'post' => new PostsResource($posts)];

        return $response;
    }
}
