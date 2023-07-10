<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $comments = Comment::all();

        return CommentResource::collection($comments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'comment_content' => 'required',
            'post_id' => 'required',
        ]);

        $comment = Comment::create($request->all());

        return new CommentResource($comment);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $comment = Comment::findOrFail($id);

        return new CommentResource($comment);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $comment = Comment::findOrFail($id);

        $request->validate([
            'comment_content' => 'required',
            'post_id' => 'required',
        ]);

        $comment->update($request->all());

        return new CommentResource($comment);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $comment = Comment::findOrFail($id);

        $comment->delete();

        return response()->json(['message' => 'Comment deleted']);
    }
}
