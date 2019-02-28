<?php

namespace ServicesBundle\Controller;

use ServicesBundle\Entity\Services;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ServiceCatController extends Controller
{
    public function elec_showAction(Request $request)
    {

           $cat=$request->get('cat');

        $em = $this->getDoctrine()->getManager();
        $category=$em->getRepository('ServicesBundle:Categories')->findOneBy(array("libelle" => $cat,));


        $services = $em->getRepository('ServicesBundle:Services')->findBy(array("Categorie" =>$category,));



        return $this->render('@Services/ServiceCat/elec_show.html.twig', array(
            'services' => $services,
        ));
    }

    public function StandardAction(Request $request)
    {   $em = $this->getDoctrine()->getManager();


        $id=$request->get('id');
        $service = $em->getRepository('ServicesBundle:Services')->find($id);
        $service->getUser()->setView($service->getUser()->getView()+1);
        $em->flush();

        return $this->render('@Services/ServiceCat/details.html.twig',array("Service" =>$service,));
    }
}
