export interface CaptchaResponse {
  code: number
  msg: string
  data: CaptchaData
}

export interface CaptchaData {
  captcha: string
  type: number
  uuid: string
}

export interface CourseXGKCData {
  courseNumber: string
  courseName: string
  courseTeacher: string
  teachingPlace: string
  classCapacity: number
  remain: number
  courseType: string
  point: string
}

export interface CourseTJKCData {
  courseNumber: string
  courseName: string
  classNumber: number
  courseType: string
  courseNature: string
  courseDepartment: string
  point: string
}

export interface AddedCourseItem {
  clazzId: string
  secretVal: string
}

export interface SelectedCourseData {
  courseNumberAndName: string
  teacherName: string
  teachingPlace: string
  point: string
  courseType: string
  courseNature: string
  campus: string
}

export interface DeselectedCourseData {
  courseNumberAndName: string
  teacherName: string
  courseType: string
  courseNature: string
  point: string
  deSelectedTime: string
  deSelectedOperator: string
  deSelectedType: string
  selectedLevel: string
}

export interface MyCourseData {
  information: string
  startTime: string
  endTime: string
  weekDay: string
}
