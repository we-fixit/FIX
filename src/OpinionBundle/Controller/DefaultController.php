<?php

namespace OpinionBundle\Controller;

use Ob\HighchartsBundle\Highcharts\Highchart;
use OpinionBundle\Entity\Opinion;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function chartAction()
    {
        // Chart
        $series = array(
            array("name" => "Evaluation en fct de personne","data" => array("rating"))
        );

        $ob = new Highchart();
        $ob->chart->renderTo('piechart');
        $ob->title->text('Browser market shares at a specific website in 2010');
        $ob->plotOptions->pie(array(
            'allowPointSelect'  => true,
            'cursor'    => 'pointer',
            'dataLabels'    => array('enabled' => false),
            'showInLegend'  => true
        ));
        $em=$this->getDoctrine()->getManager();
        $query=$em->getRepository(Opinion::class)->statOpinion();

        $data=array();
foreach ($query as $e)
{
    $element=array($e['note'],$e['nbr']);
    array_push($data, $element);
}

        $ob->series(array(array('type' => 'pie','name' => 'Browser share', 'data' => $data)));

        return $this->render('@Opinion/Default/index.html.twig', array(
            'chart' => $ob,'data' => $data
        ));
    }

}
