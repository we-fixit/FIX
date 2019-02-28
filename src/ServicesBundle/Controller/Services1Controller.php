<?php

namespace ServicesBundle\Controller;

use ServicesBundle\Entity\Services;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

/**
 * Service1 controller.
 *
 * @Route("services1")
 */

class Services1Controller extends Controller
{
 /**
     * Lists all service entities.
     *
     * @Route("/", name="services_index_admin")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $services = $em->getRepository('ServicesBundle:Services')->findAll();

        return $this->render('@Services/services1/index.html.twig', array(
            'services' => $services,
        ));
    }

    /**
     * Creates a new service entity.
     *
     * @Route("/new", name="services_new_admin")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $service = new Services();

        $form = $this->createForm('ServicesBundle\Form\ServicesType', $service);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /**
             * @var UploadedFile $file
             */
            $file=$service->getImage();
            $filename = '.'.$file->guessExtension();
            $file->move($this->getParameter('images_directory'),$filename);
            $service->setImage($filename);
            $em = $this->getDoctrine()->getManager();
            $em->persist($service);
            $em->flush();

            return $this->redirectToRoute('services_show_admin', array('id' => $service->getId()));
        }

        return $this->render('@Services/services1/new.html.twig', array(
            'service' => $service,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a service entity.
     *
     * @Route("/{id}", name="services_show_admin")
     * @Method("GET")
     */
    public function showAction(Services $service)
    {
        $deleteForm = $this->createDeleteForm($service);

        return $this->render('@Services/services1/show.html.twig', array(
            'service' => $service,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing service entity.
     *
     * @Route("/{id}/edit", name="services_edit_admin")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Services $service)
    {
        $deleteForm = $this->createDeleteForm($service);
        $editForm = $this->createForm('ServicesBundle\Form\ServicesType', $service);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('services_edit_admin', array('id' => $service->getId()));
        }

        return $this->render('@Services/services1/edit.html.twig', array(
            'service' => $service,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a service entity.
     *
     * @Route("/delete/{id}", name="services_delete_admin")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Services $service)
    {
        $form = $this->createDeleteForm($service);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($service);
            $em->flush();
        }

        return $this->redirectToRoute('services_index_admin');
    }

    /**
     * Creates a form to delete a service entity.
     *
     * @param Services $service The service entity
     *
     * @return \Symfony\Component\Form\FormInterface The form
     */
    private function createDeleteForm(Services $service)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('services_delete_admin', array('id' => $service->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }



}
