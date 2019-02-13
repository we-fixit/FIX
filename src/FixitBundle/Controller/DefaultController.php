<?php

namespace FixitBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@Fixit/Default/index.html.twig');
    }

    public function helloword()
    {
        return;
    }
}