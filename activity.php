<?php

// Create Interface for activities
interface ActivityInterface
{
    public  function name();
    public  function duration();


    public function displayDetails();
    
}


// Parent class for all activities
abstract class Activity implements ActivityInterface
{
    protected $name;
    protected $duration;

    public  function name(){

    }
    public  function duration(){
        
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
    //create constructor

    //create setter and getter methods
    
    abstract public function displayDetails();
}
// Child class for sports activities
class SportsActivity extends Activity
{
    public function displayDetails()
    {
        echo "Name: " . $this->name . "\n";
        echo "<br>";
        echo "Duration: " . $this->duration . "\n";
        echo "<br>";
        echo "Equipment: " . $this->equipment . "\n";
        echo "<br>";
        echo "\n";
        echo "<br>";
    }
    
    private $equipment;

    public function __construct($name, $duration, $equipment) {
        $this->name = $name;
        $this->duration = $duration;
        $this->equipment = $equipment;
            
} 
    public function setName($name){
        $this->name = $name;
    }  
    public function setDuration($duration){
        $this->duration = $duration;
    }  
    public function setEquipment($equipment){
        $this->equipment = $equipment;
    }  
    public function getName(){
        $this->name;
    }  
    public function getDuration(){
        $this->duration;
    }  
    public function getEquipment(){
        $this->equipment;
    }   

    
   //create constructor
   //create setter and getter methods
   //show details name, duration and equipment
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;
    public function displayDetails()
    {
        echo "Name: " . $this->name . "\n";
        echo "<br>";
        echo "Duration: " . $this->duration . "\n";
        echo "<br>";
        echo "Equipment: " . $this->subject . "\n";
        echo "<br>";
        echo "\n";
        echo "<br>";
    }
    public function __construct($name, $duration, $subject) {
        $this->name = $name;
        $this->duration = $duration;
        $this->subject = $subject;           
} 
    public function setName($name){
        $this->name = $name;
    }  
    public function setDuration($duration){
        $this->duration = $duration;
    }  
    public function setSubject($subject){
        $this->subject = $subject;
    }
    public function getName(){
        $this->name;
    }  
    public function getDuration(){
        $this->duration;
    }  
    public function getSubject(){
        $this->subject;
    }  
     //create constructor
    //create setter and getter methods

    //show details name, duration and subject
    
}


// Create instances of activity classes
$sportsActivity = new sportsActivity ('rhett','2 hours','book');
$academicActivity = new academicActivity('rhett','1 hour','book');

$activities = [$sportsActivity, $academicActivity];
// Store created object activities in an array
foreach ($activities as $activity) {
        $activity->displayDetails();
}

?>