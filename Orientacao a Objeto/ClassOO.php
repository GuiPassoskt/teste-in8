<?php

class ClassOO {
    private $num1;
    private $num2;
    private $num3;

    public function __construct()
    {

    }

    public function getNum1 () 
    {
        return $this->num1;
    }

    public function setNum1 ($num) 
    {
        $this->num1 = $num;
    }

    public function getNum2 () 
    {
        return $this->num2;
    }

    public function setNum2 ($num) 
    {
        $this->num2 = $num;
    }

    public function getNum3 () 
    {
        return $this->num3;
    }

    public function setNum3 ($num) 
    {
        $this->num3 = $num;
    }

    public function multiple () 
    {
        echo $this->getNum1() * 
             $this->getNum2() * 
             $this->getNum3();
    } 
}

$coo = new ClassOO();
$coo->setNum1(2);
$coo->setNum2(8);
$coo->setNum3(5);
$coo->multiple();