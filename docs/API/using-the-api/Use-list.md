---
sidebar_position: 1
---
import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";

# Using /list Endpoint

In this tutorial, we will be using the `/list` endpoint to get a list of all circulars in a single category.

This endpoint returns a JSON object containing the list of circulars in the category.


#### Parameters:
* `category` : `string`. Can have values (`general`, `ptm`, `exam`) [Mandatory]

The `category` parameter refers to one of the 3 main category of circulars on the BPS Website.



## Example Requests

<Tabs>
<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

```python
import requests

url = "https://bpsapi.rajtech.me/v1/list"
payload = {'category': 'ptm'}

request = requests.get(url, json=payload)
print(request.text)
```

</TabItem>
<TabItem value="curl" label="cURL">

Here is an example request using cURL:

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/list' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "category": "ptm",
      }'
```


</TabItem>

</Tabs>



## Example Response

<Tabs>
<TabItem value="general" label="General" default>

When getting circulars from the `general` category, the response is a dictionary with the following keys:

<details><summary>Open Full Response (202 lines)</summary>
<p>


```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    {
      "title": "International French Spell Bee",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147"
    },
    {
      "title": "KG Annual  Day Celebrations 2022-23",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1142"
    },
    {
      "title": "Non-Instructional Day for KG",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1141"
    },
    {
      "title": "Kindergarten Grandparents Day Celebration and Holiday Homework Exhibition 2022 -2023",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1125"
    },
    {
      "title": "Kindergarten Educational Trip",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1124"
    },
    {
      "title": "LOC Signature for Grade X & XII",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1123"
    },
    {
      "title": "French Competition",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1122"
    },
    {
      "title": "Fake Information Alert",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1121"
    },
    {
      "title": "Grade IX CBSE Registration",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1120"
    },
    {
      "title": "Grade XI CBSE Registration",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1119"
    },
    {
      "title": "Onam Holiday",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1118"
    },
    {
      "title": "Teacher's Day Dispersal Timings",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1117"
    },
    {
      "title": "Issuance of Hayya card",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1116"
    },
    {
      "title": "19th Founders' day celebrations 2022-23",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1113"
    },
    {
      "title": "Qatar History Circular",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1110"
    },
    {
      "title": "Mobile Phone Usage Policy",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1108"
    },
    {
      "title": "Consent form for Circular no. 33",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1107"
    },
    {
      "title": "IEO,NSO, IMO & NCO Registration",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1106"
    },
    {
      "title": " International Informatics Olympiad 2022",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1105"
    },
    {
      "title": "BPS Robotic Club",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1104"
    },
    {
      "title": " Circular for the Students of Class XII",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1103"
    },
    {
      "title": " Circular for the Students of Class X",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1102"
    },
    {
      "title": "DCMUN and MSMUN",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1101"
    },
    {
      "title": "Birlites' Expressions-School magazine - Invitation to students of KG",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1100"
    },
    {
      "title": "Birlites Expressions-School Magazine - Invitation to parents & Alumni",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1099"
    },
    {
      "title": "-Birlites Expressions-School Magazine, 2022  - Invitation to Students of Grade I to Grade XII.",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1098"
    },
    {
      "title": "BPS Model United Nations 2022",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1097"
    },
    {
      "title": "Schedule for 23-30 June 2022",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1096"
    },
    {
      "title": "CIALFO Platform",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1094"
    },
    {
      "title": "Birla Cyber Club",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1093"
    },
    {
      "title": "NHSMUN, New York",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1092"
    },
    {
      "title": "Preparatory holiday",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1091"
    },
    {
      "title": "Reducing COVID precautions in School",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1055"
    },
    {
      "title": "Nomination for Assistant Prefects Grade XI",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1054"
    },
    {
      "title": "QLC XI - 2022, THIMUN Qatar conference XII-2023, THIMUN Singapore and Middle School MUN-2023",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1053"
    },
    {
      "title": "14 May Working Day for Grade VIII to X and XII",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1049"
    },
    {
      "title": "After School Activity Revised Dates",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1048"
    },
    {
      "title": "Alternate Saturdays Non-Working Day",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1045"
    },
    {
      "title": "Change in School Uniform",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1044"
    },
    {
      "title": " BPS Gavel Club",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1043"
    },
    {
      "title": "Scrabble Club",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1042"
    },
    {
      "title": "Enrolment of new member to the school Eco Club (Class 3 to 12)",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1041"
    },
    {
      "title": "After School Activity",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1040"
    },
    {
      "title": "Public Holiday - Eid-Ul-Fitr",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1039"
    },
    {
      "title": "School working hours during CBSE Board Exams",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1023"
    },
    {
      "title": "Charity Week",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1020"
    },
    {
      "title": "Summer Vacation",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1019"
    },
    {
      "title": "Election to Prefect Board -School Council -Class Monitor",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1017"
    },
    {
      "title": "Easter - Holiday",
      "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1018"
    }
  ]
}
```

</p>
</details>

</TabItem>
<TabItem value="ptm" label="PTM">

When getting circulars from the `ptm` category, the response is a dictionary with the following keys:

<details><summary>Open Full Response (54 lines)</summary>
<p>


```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade XI",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1126"
    },
    {
      "title": "The 2nd Parents Teacher Meeting for Grades V, VI, VII & VIII",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1115"
    },
    {
      "title": "The 2nd Parents Teacher Meeting(PTM) for Grades III & IV",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1114"
    },
    {
      "title": "2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII ",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade IX",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1060"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade VI - VIII",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1059"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade V",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1058"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade III - IV",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1057"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade I - II",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1056"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade XII",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1052"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Grade X",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1051"
    },
    {
      "title": "1st Parent Teacher Meeting (PTM) for Kindergarten ",
      "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1050"
    }
  ]
}
```

</p>
</details>


</TabItem>
<TabItem value="exam" label="Exam">

When getting circulars from the `exam` category, the response is a dictionary with the following keys:

<details><summary>Open Full Response (165 lines)</summary>
<p>


```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    {
      "title": "TIME TABLE - PRE BOARD -  1(X & XII) &  HALF YEARLY EXAM (XI) - OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1146"
    },
    {
      "title": "GRADE XII - SYLLABUS FOR THE PRE BOARD 1 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1145"
    },
    {
      "title": "GRADE X - SYLLABUS FOR THE PRE BOARD 1 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1144"
    },
    {
      "title": "GRADE XI - THE HALF YEARLY EXAM – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1143"
    },
    {
      "title": "GRADES VI - IX - TIME TABLE PERIODIC TEST 2 – OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1140"
    },
    {
      "title": "GRADE V - TIME TABLE PERIODIC TEST 2 – OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1139"
    },
    {
      "title": "GRADE III & IV  - TIME TABLE PERIODIC TEST 2 – OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1138"
    },
    {
      "title": "GRADE II - TIME TABLE PERIODIC TEST 2 – OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1137"
    },
    {
      "title": "GRADE I - TIME TABLE PERIODIC TEST 2 – OCTOBER 2022",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1136"
    },
    {
      "title": "GRADE IX - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1135"
    },
    {
      "title": "GRADE VIII - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1134"
    },
    {
      "title": "GRADE VII - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1133"
    },
    {
      "title": "GRADE VI - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1132"
    },
    {
      "title": "GRADE V - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1131"
    },
    {
      "title": "GRADE IV - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1130"
    },
    {
      "title": "GRADE III - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1129"
    },
    {
      "title": "GRADE II - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1128"
    },
    {
      "title": "GRADE i - SYLLABUS FOR THE PERIODIC TEST 2 – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1127"
    },
    {
      "title": "Grade  XI - Syllabus for the First Periodic Test",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1112"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE XII – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1090"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE X – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1089"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE IX – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1088"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE VIII – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1087"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE VII – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1086"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE VI – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1085"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE V – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1084"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE IV – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1083"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE III – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1082"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE II – 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1081"
    },
    {
      "title": "SYLLABUS FOR THE HALF YEARLY EXAMINATION FOR GRADE 1– 2022- 2023",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1080"
    },
    {
      "title": "Half Yearly Time Table for Grade XII",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1067"
    },
    {
      "title": "Half Yearly Time Table for Grade X",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1066"
    },
    {
      "title": "Half Yearly Time Table for Grade IX",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1065"
    },
    {
      "title": "Half Yearly Time Table for Grades VI - VIII",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1064"
    },
    {
      "title": "Half Yearly Time Table for Grade V",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1063"
    },
    {
      "title": "Half Yearly Time Table for Grades III & IV",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1062"
    },
    {
      "title": "Half Yearly Time Table for Grades I & II",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1061"
    },
    {
      "title": "PT 1 - TIME TABLE FOR GRADE II",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1038"
    },
    {
      "title": "PT 1-  SYLLABUS FOR GRADE IX",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1037"
    },
    {
      "title": "PT 1-  SYLLABUS FOR GRADE VIII",
      "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1036"
    }
  ]
}
```

</p>
</details>


</TabItem>
</Tabs>
---

Thanks for reading!