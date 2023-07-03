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
   
    //create setter and getter methods

   
    public function __construct($name, $duration)
    {
        $this->name = $name;
        $this->duration = $duration;
    }
    public function setName($name){
        $this->name = $name;
    }
    public function getName(){
        return $this->name;
    }
    public function setDuration($duration){
        $this->duration = $duration;
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

    public function __construct($equipment)
    {
        $this->equipment = $equipment;
    }
    
     public function setEquipment($equipment){
        $this->equipment = $equipment;
    }
     public function getEquipment(){
        return $this->equipment;
    }

    public function displayDetails(){
        echo "Name: " . $this->name;
        echo "<br>";
        echo "Duration: " . $this->duration;
        echo "<br>";
        echo "Equipment: " . $this->equipment;
        echo "<br>";
    }
   //create constructor
   //create setter and getter methods
   //show details name, duration and equipment
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

    public function __construct($subject)
    {
        $this->subject = $subject;
    }


    public function setSubject($subject){
        $this->subject = $subject;
    }
    public function getSubject(){
        return $this->subject;
    }
    public function displayDetails(){
        echo "Name: " . $this->name;
        echo "<br>";
        echo "Duration: " . $this->duration;
        echo "<br>";
        echo "Subject: " . $this->subject;
        echo "<br>";
    } 
}

// Create instances of activity classes

$basketball = new SportsActivity('Basketball', 2, 'Shooting Ring');
$basketball->setName('Basketball');
$basketball->setDuration(2);
$basketball->setEquipment('Shooting Ring');

$volleyball = new SportsActivity('Volleyball', 1, 'Net');
$volleyball->setName('Volleyball');
$volleyball->setDuration(1);
$volleyball->setEquipment('Net');

$math = new AcademicActivity('Math', 2, 'Math Subject');
$math->setName('Math');
$math->setDuration(2);
$math->setSubject('Math Subject');

$english = new AcademicActivity('English', 1, 'English Subject');
$english->setName('English');
$english->setDuration(1);
$english->setSubject('English Subject');


// // Store created object activities in an array

$activities = [$SportsActivity, $AcademicActivity];

// // Display details of all activities using foreach
foreach ($activities as $activity) {
    $activity->displayDetails();
}
 ?>
