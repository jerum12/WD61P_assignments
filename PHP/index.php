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
   public function __construct($name, $duration){
    $this -> name = $name;
    $this -> duration = $duration;
   }
    //create setter and getter methods
    public function setName($name){
        $this -> name = $name;
    }

    public function getName(){
        return $this -> name;
    }

    public function setDuration($duration){
        $this -> duration = $duration;
    }

    public function getDuration(){
        return $this -> duration;
    }

    abstract public function displayDetails();
}

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
   public function __construct($equipment){
    $this -> equipment = $equipment;
   }
   //create setter and getter methods
   public function setEquipment($equipment){
    $this -> equipment = $equipment;
}

public function getEquipment(){
    return $this -> equipment;
}
   //show details name, duration and equipment
public function displayDetails(){
    echo "Name: {$this -> name} Duration: {$this -> duration}, Equipment: {$this -> equipment}";
}

// $sports = new SportsActivity("League", "2hrs", "Spear");
// $sports -> showDetails();

// Child class for academic activities
}
class AcademicActivity extends Activity
{
    private $subject;

     //create constructor
     public function __construct($subject){
        $this -> subject = $subject;
       }
    //create setter and getter methods
    public function setSubject($subject){
        $this -> subject = $subject;
    }
    
    public function getSubject(){
        return $this -> subject;
    }
    //show details name, duration and subject
    public function displayDetails(){
        echo "Name: {$this -> name} Duration: {$this -> duration}, Subject: {$this -> subject}";
    }
}

// Create instances of activity classes

$sportsActivity = new SportsActivity();
$academicActivity = new AcademicActivity();
// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
        echo "$activity <br>";
}
?>
a