<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentsResource;
use App\Models\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    //
    public function index()
    {
        //
        $comments = Comments::all();
        $response = ['code'=>200, 'message'=>'Comments retrieved successfully.','data'=>CommentsResource::collection($comments)];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $comments = Comments::create($input);
        $response =['code'=>200,'message'=>'Comments created successfully.','data' => new CommentsResource($comments)];
        
        return $response;
   
   
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)

    {
        //
        $comments = Comments::findOrFail($id);
        $response = ['code'=>200,'message'=>'Comments retrieved successfully.','data'=> new CommentsResource($comments)];
        
        return $response;
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $comments = Comments::findOrFail($id);
        $comments->update($input);
        $response = ['code'=>200,'message'=>'Comments successfully updated.','data'=> new CommentsResource($comments)];

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $comments = Comments::findOrFail($id);
        $response = ['code'=>200,'message'=>'Comments successfuly removed.'];
        
        return $response;
    }
}
