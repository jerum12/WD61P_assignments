<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentsResource;
use App\Models\CommentsModel;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $comments = CommentsModel::all();
        $response = ['code' => 200, 'message' => 'Comments successfully retrieved.', 'comments' => CommentsResource::collection($comments)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $comments = CommentsModel::create($request->all());
        $response = ['code' => 200,'message' => 'Comments successfully created.', 'comments' => new CommentsResource($comments)];

        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(CommentsModel $commentsModel, $id)
    {
        //
        $comments = CommentsModel::find($id);
        $response = ['code' => 200, 'message' => 'Comments successfully retrieved.' , 'comments' => CommentsResource::make($comments)];

        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CommentsModel $commentsModel, $id)
    {
        //
        $comments = CommentsModel::find($id);
        $comments->update($request->all());
        $response = ['code' => 200,'message' => 'Comments successfully updated.', 'comments' => new CommentsResource($comments)];

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CommentsModel $commentsModel, $id)
    {
        //
        $comments = CommentsModel::find($id);
        $comments->delete();
        $response = ['code' => 200,'message' => 'Comments successfully deleted.', 'comments' => new CommentsResource($comments)];

        return $response;
    }
}
