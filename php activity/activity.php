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
    public function __construct($name,$duration){
        $this->name = $name;
        $this->duration = $duration;
    }
    //create setter and getter methods
    function get_name(){
        return $this->name;
    }
    function get_duration(){
        return $this->duration;
    }

    abstract public function displayDetails();
}

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
   public function __construct($equipment){
    $this->equipment = $equipment;
}
   //create setter and getter methods
   function get_equipment(){
    return $this->equipment;
   }
   //show details name, duration and equipment
   public function displayDetails()
   {
    return "$this->name,$this->duration,$this->equipment";
   }
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

    //create constructor
    public function __construct($subject){
        $this->subject = $subject;
    }
       //create setter and getter methods
       function get_subject(){
        return $this->subject;
       }
    //show details name, duration and subject
    public function displayDetails()
   {
    return "$this->name,$this->duration,$this->subject";
   }
}

// Create instances of activity classes
if($activities instanceof AcademicActivity) {
    echo "The object is AcademicActivity";
  }
if($activities instanceof SportsActivity) {
    echo "The object is SportsActivity";
  }

// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
 
}

?>