<?php

namespace FixitBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@Fixit/Default/index.html.twig');
    }
    public function adminAction()
    {

        return $this->render('@Fixit/Default/admin.html.twig');
    }
    public function contactAction()
    {

        return $this->render('@Fixit/Default/contact.html.twig');
    }

    public function aboutAction()
    {

        return $this->render('@Fixit/Default/about.html.twig');
    }
    public function electAction()
    {

        return $this->render('@Fixit/Default/Electronique.html.twig');
    }
    public function mecAction()
    {

        return $this->render('@Fixit/Default/Mecanique.html.twig');
    }
    public function telAction()
    {

        return $this->render('@Fixit/Default/tel.html.twig');
    }
    public function elecmAction()
    {

        return $this->render('@Fixit/Default/elcm.html.twig');
    }
    public function plomAction()
    {

        return $this->render('@Fixit/Default/plomberie.html.twig');
    }












}