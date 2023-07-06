<?php

// Create Interface for activities
interface ActivityInterface
{
    public function displayDetails();
}

// Parent class for all activities
abstract class Activity implements ActivityInterface
{
    protected $name;
    protected $duration;

    //create constructor
 public  function __construct($name,$duration){
        $this->name=$name;
        $this->duration=$duration;
    }

    //create setter and getter methods
    public function setName($name){
        return $this->setName($name);
    }
    public function setDuration($duration){
        return $this->setDuration($duration);
    }
    public function getName(){
        return $this->name;
    }
    public function getDuration(){
        return $this->duration;
    }
    abstract public function displayDetails();
}

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
    public function __construct($name,$duration,$equipment){
        $this->name=$name;
        $this ->duration=$duration;
        $this->equipment=$equipment;
   } 
   //create setter and getter methods
   public function setEquipment($equipment){
    return $this->setEquipment($equipment);
   }
   
    public function getEquipment(){
    return $this->equipment;
}
//show details name, duration and equipment
    public function displayDetails(){
        return "Activities for Sports include $this->name for $this->duration using $this->equipment ";
    }
     
} 
    $sportsActivity= new SportsActivity('Tennis',"1hr","Racket and Shuttle Cock");
    $sportsActivity->displayDetails();
  
// Child class for academic activitiesy
class AcademicActivity extends Activity
{
   private $subject;

     //create constructor
     public function __construct($name,$duration,$subject){
        $this->name=$name;
        $this->duration=$duration;
        $this->subject =$subject;
     }
    //create setter and getter methods
    public function setSubject($subject){
        return $this->setSubject($subject);
    }
    public function getSubject(){
        return $this->subject;
    } 
    //show details name, duration and subject
    public function displayDetails(){
        return "Activity for Academic include $this->name for $this->duration in $this->subject " ;
    }
}
    $academicActivity= new AcademicActivity("Journalism","3hrs.","English");
     $academicActivity->displayDetails();



// Create instances of activity classes
$sportsActivity=new SportsActivity("Volleyball","1hr","Ball");
$academicActivity=new AcademicActivity("Laboratory","2hrs","Science & Technology");
// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

function printActivity(iterable $activities){
// Display details of all activities using foreach
    foreach ($activities as $activity) {
     $activity-> displayDetails();}
}
?>
