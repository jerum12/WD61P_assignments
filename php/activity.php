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
    public function __construct($name, $duration) {
        $this->name = $name;
        $this->duration = $duration;
      }

    
    //create setter and getter methods
    public function setName($name) {
        $this->name = $name;
    }
    public function setDuration($duration) {
        $this->duration = $duration;
    }
    function get_name() {
        return $this->name;
      }
      function get_duration() {
        return $this->duration;
      }
    abstract public function displayDetails();
       
}

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

   //create constructor
   public function __construct($equipment) {
    $this->equipment = $equipment;
  }
   //create setter and getter methods
   public function setEquipment($equipment) {
    $this->equipment = $equipment;
    }
function get_equipment() {
    return $this->equipment;
  }
   //show details name, duration and equipment
 public function displayDetails(){
   echo $this->name;
   echo $this->duration;
   echo $this->equipment;

}

   
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

     //create constructor
     public function __construct($subject) {
        $this->subject = $subject;
      }
       //create setter and getter methods
       public function setSubject($subject) {
        $this->subject = $subject;
        }
    function get_subject() {
            return $this->subject;
          }

    //show details name, duration and subject
    public function displayDetails(){
        echo $this->name;
        echo $this->duration;
        echo $this->subject;
     
     }
}

// Create instances of activity classes
$sportsActivity = new sportsActivity('Basket Ball');
//$sportsActivity->setEquipment('Basket Ball');
//$equipment = $sportsActivity->get_equipment();

$academicActivity = new academicActivity('Physical Education');
//$academicActivity->setSubject('Physical Education');
//$subject = $academicActivity->get_subject();


// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
 $activity->displayDetails();
}
?>
 