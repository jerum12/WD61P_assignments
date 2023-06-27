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
    public function __construct()
    {
        $this->name = "Php Activity";
        $this->duration = "00:00:00";
    }
    //create setter and getter methods
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
    public function getName()
    {
        return $this->name;
    }

    public function setDuration($duration)
    {
        $this->duration = $duration;
        return $this;
    }
    public function getDuration()
    {
        return $this->duration;
    }
    abstract public function displayDetails();
}

// Child class for sports activities
class SportsActivity extends Activity
{
    private $equipment;

    //create constructor
    public function __construct($equipment)
    {
        parent::__construct();
        $this->equipment = $equipment;
    }
    //create setter and getter methods
    public function setEquipment($equipment)
    {
        $this->equipment = $equipment;
        return $this;
    }
    public function getEquipment()
    {
        return $this->equipment;
    }
    //show details name, duration and equipment
    public function displayDetails()
    {
        echo "Name: " . $this->getName() . "\n";
        echo "Duration: " . $this->getDuration() . "\n";
        echo "Equipment: " . $this->getEquipment() . "\n";
    }
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

    //create constructor
    public function __construct($subject)
    {
        parent::__construct();
        $this->subject = $subject;
    }
    //create setter and getter methods
    public function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }
    public function getSubject()
    {
        return $this->subject;
    }

    //show details name, duration and subject
    public function displayDetails()
    {
        echo "Name: " . $this->getName() . "\n";
        echo "Duration: " . $this->getDuration() . "\n";
        echo "Subject: " . $this->getSubject() . "\n";
    }
}

// Create instances of activity classes

$sportsActivity = new SportsActivity('Laptop');
$academicActivity = new AcademicActivity('Web Development');


// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
    $activity->displayDetails();
}
?>
