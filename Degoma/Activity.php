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
        $this->name = $name;
        $this->duration = $duration;
    }

    //create setter and getter methods
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

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
   public function __construct($name, $duration, $equipment){
    $this->name = $name;
    $this->duration = $duration;
    $this->equipment = $equipment;
   }
   
   //create setter and getter methods
   public function setEquipment($equipment){
    $this->equipment = $equipment;
   }
   public function getEquipment(){
    return $this->equipment;
   }
   //show details name, duration and equipment
   public function displayDetails(){
    echo   "SPORTS ACTIVITY DETAILS <br/>
            Name: {$this->name} <br/>
            Duration: {$this->duration} <br/>
            Equipment: {$this->equipment} <br/>";
   }
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

     //create constructor
     public function __construct($name, $duration, $subject){
        $this->name = $name;
        $this->duration = $duration;
        $this->subject = $subject;
     }
  
    //create setter and getter methods
    public function setSubject($subject){
        $this->subject = $subject;
    }
    public function getSubject(){
        return $this->subject;
     }

    //show details name, duration and subject
    public function displayDetails(){
        echo    "ACADEMIC ACTIVITY DETAILS <br/>
                Name: {$this->name} <br/>
                Duration: {$this->duration} <br/>
                Subject: {$this->subject} <br/>";
    }
}

// Create instances of activity classes
$sportsAct1 = new SportsActivity('Paul John','1 hour', 'Baseball');
$sportsAct2 = new SportsActivity('Andria Mae','1 hour', 'Volleyball');
$sportsAct3 = new SportsActivity('Parker','2 hours', 'Basketball');
$sportsAct4 = new SportsActivity('Mavis','30 minutes', 'Ice Skates');
$sportsAct5 = new SportsActivity('Macy','2 minutes', 'Bow and Arrow');

$academicAct1 = new AcademicActivity('Paul John','3 hours','Mathematics');
$academicAct2 = new AcademicActivity('Andria Mae','1 hour','Software Engineering');
$academicAct3 = new AcademicActivity('Parker','1 hour','English');
$academicAct4 = new AcademicActivity('Mavis','1 hour','Filipino');
$academicAct5 = new AcademicActivity('Macy','1 hour','Science');


// Store created object activities in an array
//$sportsActivity = array($sportsAct1, $sportsAct2, $sportsAct3, $sportsAct4, $sportsAct5);
//$academicActivity = array($academicAct1, $academicAct2, $sacademicAct3, $academicAct4, $academicAct5);
$activities = array($sportsAct1, $sportsAct2, $sportsAct3, $sportsAct4, $sportsAct5, $academicAct1, $academicAct2, $academicAct3, $academicAct4, $academicAct5);

// Display details of all activities using foreach
foreach ($activities as $activity) {
    $activity->displayDetails();

}
?>
