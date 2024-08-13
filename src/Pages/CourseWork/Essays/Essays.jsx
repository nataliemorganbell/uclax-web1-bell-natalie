import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay question={`The Difference Between HTML, CSS & JS:`}>
                <ul>
                    <li>
                        <b>Item 1</b>: Answer goes here.
                    </li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <p>
                    While HTML creates the basic structure for a website, CSS
                    adds style to that structure, and JavaScript takes all of
                    that work and makes it interactive and more functionally
                    complex. (UT Austin Tech Boot Camp; Online Article - HTML,
                    CSS, and JavaScript: Your Guide to Learning Fundamental
                    Front End Languages) HTML is all the background work, the
                    guts that you build the rest of the interface on top of. CSS
                    (Cool Styling Stuff) Cascading Style Sheets is the literal
                    “cool styling stuff”; the design work that is part of the
                    make or break experience the viewer/user will have.
                    JavaScript (JS) is the other half of the make or break
                    experience– how your website functions and interacts with
                    the user. A poorly designed front end in JS can really be a
                    bummer and affect the efficiency and amount of traffic on
                    your website, if that’s what you’re into.
                </p>
            </SingleEssay>
            <SingleEssay question={`The Difference Between Git & Github:`}>
                GitHub has built an entire ecosystem of DevOps tools around the
                Git tooling that promises to make developers, software teams and
                organizations more productive. The key difference between Git
                and GitHub is that Git is a free, open source version control
                tool that developers install locally on their personal
                computers, while GitHub is a pay-for-use online service built to
                run Git in the cloud. Git is a piece of software. GitHub is an
                online SaaS service. (The Server Side: Your Enterprise Java
                Community; Online Article, Feb. 2024 - Git vs. GitHub: What’s
                the Difference?) Git is: •Used for Version Control •Installed
                Locally on Computer •Tracks Changes Made to Your Code Over Time
                GitHub is: •Used for Hosting Git Repositories •Cloud-Based
                Provides a Web Interface to View File Changes (HubSpot; Blog
                Entry, Oct. 2023 - Git vs. GitHub: What’s the Difference?)
            </SingleEssay>
            <SingleEssay question={`The Difference Between JQuery & React:`}>
                Performance - jQuery relies on traditional DOM manipulation,
                where updates traverse the entire tree from the root. This can
                result in slower updates, especially in large or complex
                applications. In contrast, React employs the Virtual DOM,
                enhancing the update process and delivering superior
                performance. Handling Large Applications - Initially designed as
                a utility library, jQuery must be optimized for building large
                applications. As applications grow in size and complexity, using
                jQuery may lead to issues such as slower DOM updates and the
                development of "Spaghetti Code" (difficult to maintain and
                unstructured code). With its component-oriented structure and
                Virtual DOM, React excels in handling large applications. It
                ensures faster DOM updates and provides a more maintainable
                codebase, making it a preferable choice for extensive projects.
                Ease of Use - Both jQuery and React are known for their
                simplicity and user-friendly nature. Choosing between them
                depends on the project's elaborateness and specifications. For
                simple websites or tasks like animating navigation menus, jQuery
                may be more suitable. In contrast, when developing web apps with
                multiple views and advanced functionalities, React's design and
                mechanisms make it the ideal choice, enhancing ease of use for
                developers. Modernity - jQuery has played a crucial role in web
                development since the late 2000s, simplifying and expediting the
                process. However, React's more recent introduction brings modern
                updates and ongoing support. React remains relevant with
                continuous advancements, providing developers with a
                contemporary and evolving toolset. While jQuery is still
                utilized on various websites, React's modern features make it a
                more vibrant choice for today's development world. Third Party
                Libraries - In web development, third-party libraries are
                crucial in enhancing efficiency by leveraging pre-existing
                solutions. jQuery, being older, boasts a considerable number of
                available libraries. However, React has gained momentum in this
                aspect, with a vast ecosystem of Node Package Manager (NPM)
                packages. The abundance of React packages indicates a thriving
                community and a rich resource pool, giving it an edge in
                third-party library support. The comparison between jQuery and
                React reveals that both libraries have distinct strengths and
                weaknesses. While jQuery has a legacy of simplifying web
                development and is still prevalent, React emerges as a more
                modern and feature-rich choice. The decision between the two
                depends on the specific project requirements, available
                resources, and long-term goals. (Simplilearn; Online Article,
                Jul 19, 2024 - Jquery vs. React: Comprehensive Guide for
                Developers [2024])
            </SingleEssay>
            <SingleEssay
                question={`The Difference Between a Front-End & Back-End Developer:`}
            >
                Front-end developers are responsible for what users see on a
                website, like the layout, design and interactive elements.
                Back-end developers handle everything you can't see, including
                server functions, databases and security. (Forbes Advisor;
                Online Article, May 30, 2023 - Front-End Vs. Back-End
                Developers: What’s the Difference?)
            </SingleEssay>
            <SingleEssay
                question={`The Different Ways to Link to Resources in React (e.g. Root Relative vs. Document Relative):`}
            >
                Answer 4 goes here.
            </SingleEssay>
            <SingleEssay
                question={`The Difference Between JPG, GIF, PNG and SVG Images:`}
            >
                Answer 4 goes here.
            </SingleEssay>
            <SingleEssay
                question={`Define the Following Agile Roles - Project Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET & DevOps:`}
            >
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
