# Task-Management-App
Task Management application for KS Final Project

<h1>BrainStorming and Planning for the application</h1>

Databases Models

      The first element is a task on which CRUD operations can be performed.
      Task schema{
      	TaskID,
      	Task Title,
      	Task description
      	Task Status (Complete or incomplete),
            Tasktype (Personal or team),
            TaskTags (An array of tags that will help in organizing),
            TaskDeadline,
      	}
      
      The second model will be for the User and It'll be related to the task model by the 1-to-M relation
      User Schema{
      	UserId,
      	UserName,
      	UserEmail,
      	UserProfileImage,
      	}
      
      (Optional) A team model can be made which will have one or multiple team leaders, these will be the ones with authority.
      They can assign tasks to the team members. So the task will have a type, either assigned or personal.
      Team Schema{
      	TeamID,
      	TeamLeader(s)(Will be an array containing the UserIds of team leader),
      	TeamName/CompanyName,
        TeamMembers(again an array to save members),
        }

Backend

      Must have APIs for working with each model.
      - User CRUD
        -- Signup API(both with email and Google),
        -- Login API 
      - Task CRUD
      - Team CRUD

      Set up an authentication system and cookies with web tokens

FrontEnd

      Pages :
      1. Landing Page (Home Page, Telling briefly about the application).
      2. Signup Page if the user doesn't have an account.
      3. Login Page if the user has an account previously.
      4. Main Dashboard. (Searching the tasks by task titles).
      5. Teams Page.
      6. Pricing Page.

Additional Features (after submitting the base project):

      1. Payment Gateway integration, eg: Stripe, Paypal, Jazzcash (any one of the above).
      

