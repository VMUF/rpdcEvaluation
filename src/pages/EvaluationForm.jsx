import { useState } from "react";
import { createEvaluation } from "../services/ApiEvaluation";
import rpdc from "../assets/RPDC.png";

import {
  Buttons,
  ContainerBox,
  DarkButtons,
  DivCenter,
  DivQuestion,
  Form,
  Labels,
  MultiInputs,
  Textarea,
} from "../ui/Form";

import Tilt from "react-parallax-tilt";
import useDarkMode from "../hook/useDarkMode";
import { useNavigate } from "react-router-dom";

export default function EvaluationForm() {
  const { dark } = useDarkMode();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [accessbility, setAccessibility] = useState("");
  const [adequatePersonnel, setAdequatePersonnel] = useState("");
  const [approachableAndAccommodating, setApproachableAndAccommodating] =
    useState("");
  const [providesConduciveAtmosphere, setProvidesConduciveAtmosphere] =
    useState("");
  const [attendWithPromptness, setAttendWithPromptness] = useState("");
  const [comment, setComment] = useState("");

  const handleAccessbility = (e) => setAccessibility(e.target.value);
  const handleAdequatePersonnel = (e) => setAdequatePersonnel(e.target.value);
  const handleApproachableAndAccommodating = (e) =>
    setApproachableAndAccommodating(e.target.value);
  const handleProvidesConduciveAtmosphere = (e) =>
    setProvidesConduciveAtmosphere(e.target.value);
  const handleAttendWithPromptness = (e) =>
    setAttendWithPromptness(e.target.value);
  const handlesetComment = (e) => setComment(e.target.value);

  async function handleFormSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    if (
      !accessbility ||
      !adequatePersonnel ||
      !approachableAndAccommodating ||
      !providesConduciveAtmosphere ||
      !attendWithPromptness
    )
      return;
    const dateToday = new Date();
    dateToday.setDate(dateToday.getDate());

    const newData = {
      accessbility,
      adequatePersonnel,
      approachableAndAccommodating,
      providesConduciveAtmosphere,
      attendWithPromptness,
      id: crypto.randomUUID(),
      year: new Date().getFullYear(),
      month: dateToday.toISOString(),
      comment,
    };
    await createEvaluation(newData);
    setAccessibility("");
    setAdequatePersonnel("");
    setApproachableAndAccommodating("");
    setProvidesConduciveAtmosphere("");
    setAttendWithPromptness("");
    setComment("");
    navigate("/rpdcEvaluation/finish");
    setIsLoading(false);
  }

  return (
    <>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={900}
        scale={1.1}
        transitionSpeed={2000}
      >
        <DivCenter>
          <img src={rpdc} alt="background" />
        </DivCenter>
      </Tilt>

      <Form onSubmit={handleFormSubmit}>
        <ContainerBox>
          <h3>
            Accessibility of location to caters clients of different department.
          </h3>
          <DivQuestion>
            <MultiInputs
              name="AccessibilityOfLocation"
              type="radio"
              id="a"
              value={"VerySatisfied"}
              onChange={handleAccessbility}
            />
            <Labels htmlFor="a">Very satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AccessibilityOfLocation"
              type="radio"
              id="b"
              value={"Satisfied"}
              onChange={handleAccessbility}
            />
            <Labels htmlFor="b">Satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AccessibilityOfLocation"
              type="radio"
              id="c"
              value={"ModeratelySatisfied"}
              onChange={handleAccessbility}
            />
            <Labels htmlFor="c">Moderately satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AccessibilityOfLocation"
              type="radio"
              id="d"
              value={"SlightlySatisfied"}
              onChange={handleAccessbility}
            />
            <Labels htmlFor="d">Slightly satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AccessibilityOfLocation"
              type="radio"
              id="e"
              value={"NotSatisfied"}
              onChange={handleAccessbility}
            />
            <Labels htmlFor="e">Not satisfied</Labels>
          </DivQuestion>
        </ContainerBox>

        <ContainerBox>
          <h3>Adequate personnel that cater the needs of students</h3>
          <DivQuestion>
            <MultiInputs
              name="AdequatePersonnel"
              type="radio"
              id="f"
              value={"VerySatisfied"}
              onChange={handleAdequatePersonnel}
            />
            <Labels htmlFor="f">Very satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AdequatePersonnel"
              type="radio"
              id="g"
              value={"Satisfied"}
              onChange={handleAdequatePersonnel}
            />
            <Labels htmlFor="g">Satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AdequatePersonnel"
              type="radio"
              id="h"
              value={"ModeratelySatisfied"}
              onChange={handleAdequatePersonnel}
            />
            <Labels htmlFor="h">Moderately satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AdequatePersonnel"
              type="radio"
              id="i"
              value={"SlightlySatisfied"}
              onChange={handleAdequatePersonnel}
            />
            <Labels htmlFor="i">Slightly satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AdequatePersonnel"
              type="radio"
              id="j"
              value={"NotSatisfied"}
              onChange={handleAdequatePersonnel}
            />
            <Labels htmlFor="j">Not satisfied</Labels>
          </DivQuestion>
        </ContainerBox>

        <ContainerBox>
          <h3>Approachable and accommodating staff.</h3>
          <DivQuestion>
            <MultiInputs
              name="ApproachableAndAccommodating"
              type="radio"
              id="k"
              value={"VerySatisfied"}
              onChange={handleApproachableAndAccommodating}
            />
            <Labels htmlFor="k">Very satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ApproachableAndAccommodating"
              type="radio"
              id="l"
              value={"Satisfied"}
              onChange={handleApproachableAndAccommodating}
            />
            <Labels htmlFor="l">Satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ApproachableAndAccommodating"
              type="radio"
              id="m"
              value={"ModeratelySatisfied"}
              onChange={handleApproachableAndAccommodating}
            />
            <Labels htmlFor="m">Moderately satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ApproachableAndAccommodating"
              type="radio"
              id="n"
              value={"SlightlySatisfied"}
              onChange={handleApproachableAndAccommodating}
            />
            <Labels htmlFor="n">Slightly satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ApproachableAndAccommodating"
              type="radio"
              id="o"
              value={"NotSatisfied"}
              onChange={handleApproachableAndAccommodating}
            />
            <Labels htmlFor="o">Not satisfied</Labels>
          </DivQuestion>
        </ContainerBox>

        <ContainerBox>
          <h3>Provides a conducive atmosphere</h3>
          <DivQuestion>
            <MultiInputs
              name="ProvidesConduciveAtmosphere"
              type="radio"
              id="p"
              value={"VerySatisfied"}
              onChange={handleProvidesConduciveAtmosphere}
            />
            <Labels htmlFor="p">Very satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ProvidesConduciveAtmosphere"
              type="radio"
              id="q"
              value={"Satisfied"}
              onChange={handleProvidesConduciveAtmosphere}
            />
            <Labels htmlFor="q">Satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ProvidesConduciveAtmosphere"
              type="radio"
              id="r"
              value={"ModeratelySatisfied"}
              onChange={handleProvidesConduciveAtmosphere}
            />
            <Labels htmlFor="r">Moderately satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ProvidesConduciveAtmosphere"
              type="radio"
              id="s"
              value={"SlightlySatisfied"}
              onChange={handleProvidesConduciveAtmosphere}
            />
            <Labels htmlFor="s">Slightly satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="ProvidesConduciveAtmosphere"
              type="radio"
              id="t"
              value={"NotSatisfied"}
              onChange={handleProvidesConduciveAtmosphere}
            />
            <Labels htmlFor="t">Not satisfied</Labels>
          </DivQuestion>
        </ContainerBox>

        <ContainerBox>
          <h3>
            Attend with promptness on research and extension related concerns
          </h3>
          <DivQuestion>
            <MultiInputs
              name="AttendWithPromptness"
              type="radio"
              id="u"
              value={"VerySatisfied"}
              onChange={handleAttendWithPromptness}
            />
            <Labels htmlFor="u">Very satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AttendWithPromptness"
              type="radio"
              id="v"
              value={"Satisfied"}
              onChange={handleAttendWithPromptness}
            />
            <Labels htmlFor="v">Satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AttendWithPromptness"
              type="radio"
              id="w"
              value={"ModeratelySatisfied"}
              onChange={handleAttendWithPromptness}
            />
            <Labels htmlFor="w">Moderately satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AttendWithPromptness"
              type="radio"
              id="x"
              value={"SlightlySatisfied"}
              onChange={handleAttendWithPromptness}
            />
            <Labels htmlFor="x">Slightly satisfied</Labels>
          </DivQuestion>
          <DivQuestion>
            <MultiInputs
              name="AttendWithPromptness"
              type="radio"
              id="y"
              value={"NotSatisfied"}
              onChange={handleAttendWithPromptness}
            />
            <Labels htmlFor="y">Not satisfied</Labels>
          </DivQuestion>
        </ContainerBox>

        <ContainerBox>
          <DivQuestion>
            <label>Comments/Suggestion</label>
            <Textarea
              type="text"
              name="comment"
              value={comment}
              onChange={handlesetComment}
            />
          </DivQuestion>
        </ContainerBox>

        {dark ? (
          <DarkButtons disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </DarkButtons>
        ) : (
          <Buttons disabled={isLoading}>
            {" "}
            {isLoading ? "Submitting..." : "Submit"}
          </Buttons>
        )}
      </Form>
    </>
  );
}
