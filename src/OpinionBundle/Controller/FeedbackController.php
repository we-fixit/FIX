<?php

namespace OpinionBundle\Controller;

use OpinionBundle\Entity\Opinion;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Reclamation controller.
 *
 * @Route("opinionn")
 */
class FeedbackController extends Controller
{
    /**
     * Lists all Opinion entities.
     *
     * @Route("/", name="opinion_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $opinions = $em->getRepository('OpinionBundle:Opinion')->findAll();

        return $this->render('OpinionBundle:Opinion:index.html.twig', array(
            'opinions' => $opinions,
        ));
    }

    /**
     * Creates a new Opinion entity.
     *
     * @Route("/new", name="opinion_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $opinion = new Opinion();
        $form = $this->createForm('OpinionBundle\Form\OpinionType', $opinion);
        $form=$form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $n= $request->get('note');

            $opinion->setNote($n);
            $opinion->setIdUser($this->getUser());
            $em = $this->getDoctrine()->getManager();
            $em->persist($opinion);
            $em->flush();

            return $this->redirectToRoute('opinion_success');
        }

        return $this->render('@Opinion/Opinion/new.html.twig', array(
            'Opinion' => $opinion,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a Opinion entity.
     *
     * @Route("/{idOp}", name="opinion_show")
     * @Method("GET")
     */
    public function showAction()
    {

        $opinion=$this->getDoctrine()->getRepository(Opinion::class)->findAll();

        return $this->render('@Opinion/Opinion/show.html.twig', array(
            'opinion' => $opinion));
    }

    /**
     * Displays a form to edit an existing Opinion entity.
     *
     * @Route("/{idOp}/edit", name="opinion_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Opinion $opinion)
    {
        $deleteForm = $this->createDeleteForm($opinion);
        $editForm = $this->createForm('OpinionBundle\Form\OpinionType', $opinion);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('opinion_edit', array('idOp' => $opinion->getIdop()));
        }

        return $this->render('@Opinion/Opinion/edit.html.twig', array(
            'Opinion' => $opinion,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a Opinion entity.
     *
     * @Route("delete/{idOp}", name="opinion_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Opinion $opinion)
    {
        $form = $this->createDeleteForm($opinion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($opinion);
            $em->flush();
        }

        return $this->redirectToRoute('opinion_index');
    }

    /**
     * Creates a form to delete a Opinion entity.
     *
     * @param Opinion $opinion The Opinion entity
     *
     * @return \Symfony\Component\Form\FormInterface The form
     */
    public function createDeleteForm(Opinion $opinion)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('opinion_delete', array('idOp' => $opinion->getIdop())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }
    public function moyNoteAction(Request $reques)
    {   $em = $this->getDoctrine()->getManager();
        $a= $em->getRepository('OpinionBundle:Opinion')->MoynoteOpinion();

        //$a array contenant count et sum
        $n=round($a[1]/$a[2],4);

        return $this->render('@Opinion/Opinion/RatingsValue.html.twig', array(
            'note' => round($n,2),

        ));

    }

    public function NbreNoteAction(Request $reques)
    {   $em = $this->getDoctrine()->getManager();
        $a= $em->getRepository('OpinionBundle:Opinion')->NbrNoteOpinion();

        return $this->render('@Opinion/Opinion/RatingsNbre.html.twig', array('notes'=>$a,
        ));

    }
    public function SuccessAction()
    {
        return $this->render('@Opinion/Opinion/ok.html.twig');

    }


























}
