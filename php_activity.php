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

    // Create constructor
    public function __construct($name, $duration)
    {
        $this->name = $name;
        $this->duration = $duration;
    }

    // Create setter and getter methods
    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setDuration($duration)
    {
        $this->duration = $duration;
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

    // Create constructor
    public function __construct($name, $duration, $equipment)
    {
        parent::__construct($name, $duration);
        $this->equipment = $equipment;
    }

    // Create setter and getter methods
    public function setEquipment($equipment)
    {
        $this->equipment = $equipment;
    }

    public function getEquipment()
    {
        return $this->equipment;
    }

    // Display details name, duration, and equipment
    public function displayDetails()
    {
        echo "Name: " . $this->getName() . "<br>";
        echo "Duration: " . $this->getDuration() . " hours<br>";
        echo "Equipment: " . $this->getEquipment() . "<br>";
        echo "<br>";
    }
}

// Child class for academic activities
class AcademicActivity extends Activity
{
    private $subject;

    // Create constructor
    public function __construct($name, $duration, $subject)
    {
        parent::__construct($name, $duration);
        $this->subject = $subject;
    }

    // Create setter and getter methods
    public function setSubject($subject)
    {
        $this->subject = $subject;
    }

    public function getSubject()
    {
        return $this->subject;
    }

    // Display details name, duration, and subject
    public function displayDetails()
    {
        echo "Name: " . $this->getName() . "<br>";
        echo "Duration: " . $this->getDuration() . " hours<br>";
        echo "Subject: " . $this->getSubject() . "<br>";
        echo "<br>";
    }
}

// Create instances of activity classes
$sportsActivity = new SportsActivity("Football", 2, "Football boots");
$academicActivity = new AcademicActivity("Mathematics", 1, "Algebra");

// Store created object activities in an array
$activities = [$sportsActivity, $academicActivity];

// Display details of all activities using foreach
foreach ($activities as $activity) {
    $activity->displayDetails();
}
?>
