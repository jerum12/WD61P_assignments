<?php

// Create Interface for activities
interface ActivityInterface
{
    public function name();
    public function duration();
    public function displayDetails();
}

// Parent class for all activities
abstract class Activity implements ActivityInterface
{
    protected $name;
    protected $duration;

    //create constructor
    //create setter and getter methods
    public function name(){ 
    }
    public function duration(){
    }
    public function __construct($name, $duration) {
        $this->name = $name;
        $this->duration = $duration;
    }
    public function setName($name){
        $this->name = $name;
    }
    public function setDuration($duration){
        $this->duration = $duration;
    }
    public function getName(){
        return $this->name;
    }
    public function getDuration(){
        return $this->duration;
    }
    
    abstract public function displayDetails();
}
    
//Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
   //create setter and getter methods
    public function __construct($name,$duration,$equipment) {
    $this->name = $name;
    $this->duration = $duration;
    $this->equipment = $equipment;
    }
    public function setEquipment($equipment){
        $this->equipment = $equipment;
    }
    public function getEquipment(){
        $this->equipment;
    }
    public function getName(){
        $this->name;
    }  
    public function getDuration(){
        $this->duration;
    }  
   

   //show details name, duration and equipment
    public function displayDetails(){
        echo "Name: " . $this->name;
        echo "<br>";
        echo "Duration: " . $this->duration;
        echo "<br>";
        echo "Equipment: " . $this->equipment;
        echo "<br>";
        echo "<br>";
   }

}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

    //create constructor
    //create setter and getter methods
    function __construct($name,$duration,$subject) {
    $this->name = $name;
    $this->duration = $duration;
    $this->subject = $subject;
    }
    public function setSubject($subject){
        $this->subject = $subject;
    }
    public function getSubject(){
        $this->subject;
    }
    public function getName(){
        $this->name;
    }  
    public function getDuration(){
        $this->duration;
    }  

   //show details name, duration and equipment
    public function displayDetails(){
        echo "Name: " . $this->name;
        echo "<br>";
        echo "Duration: " . $this->duration;
        echo "<br>";
        echo "Subject: " . $this->subject;
        echo "<br>";
        echo "<br>";
   }
}

// Create instances of activity classes
$SportsActivity = new SportsActivity ('Kervi','3 hours','Sword');
$AcademicActivity = new AcademicActivity('Caesar','0.5 hour','Reading');

// Store created object activities in an array
$activities = [$SportsActivity, $AcademicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
    $activity->displayDetails();
}
?>