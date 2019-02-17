<?php

namespace ServicesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@ServicesBundle/Default/index.html.twig');
    }
}
