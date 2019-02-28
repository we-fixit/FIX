<?php

namespace ReclamationBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Reclamation
 *
 * @ORM\Table(name="reclamation")
 * @ORM\Entity(repositoryClass="ReclamationBundle\Repository\ReclamationRepository")
 */
class Reclamation
{
    /**
     * @var \FixitBundle\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="FixitBundle\Entity\User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id")
     * })
     */


    private $user;

    /**
     * @return \FixitBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param \FixitBundle\Entity\User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param string $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255)
     */
    private $status;
    /**
     * @var string
     *
     * @ORM\Column(name="topic", type="string", length=255)
     */
    private $topic;






    /**
     * @var string
     *@Assert\Length(
     *     min = 20,
     *     max = 100,
     *     minMessage = "votre message doit contenir au moins {{ limit }} characteres ",
     *     maxMessage = "votre message doit contenir au plus {{ limit }} characteres"
     * )
     * @ORM\Column(name="message", type="string", length=255)
     */
    private $message;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="datarec", type="date")
     */
    private $datarec;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set topic
     *
     * @param string $topic
     *
     * @return Reclamation
     */
    public function setTopic($topic)
    {
        $this->topic = $topic;

        return $this;
    }

    /**
     * Get topic
     *
     * @return string
     */
    public function getTopic()
    {
        return $this->topic;
    }

    /**
     * Set mail
     *
     * @param string $mail
     *
     * @return Reclamation
     */






    /**
     * Set message
     *
     * @param string $message
     *
     * @return Reclamation
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set datarec
     *
     * @param \DateTime $datarec
     *
     * @return Reclamation
     */
    public function setDatarec($datarec)
    {
        $this->datarec = $datarec;

        return $this;
    }

    /**
     * Get datarec
     *
     * @return \DateTime
     */
    public function getDatarec()
    {
        return $this->datarec;
    }
    public function __construct()
    {
        $this->datarec = new \DateTime();
    }
}

