import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.phenikaa-uni.edu.vn/vi');
  await page.locator('li').filter({ hasText: 'Khối KT&CNKhoa Công nghệ thông tinKhoa Khoa học và Kỹ thuật vật liệuKhoa Cơ kh' }).locator('span').click();
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.getByRole('link', { name: 'Dịch vụ trực tuyến' }).click();
  await page.getByRole('img', { name: 'Phenikaa University' }).click();
  await page.getByRole('img', { name: 'Phenikaa University' }).click();
  await page.getByRole('img', { name: 'Phenikaa University' }).click();
  await page.goto('https://www.phenikaa-uni.edu.vn/vi');
  await page.getByRole('link', { name: 'Tuyển sinh', exact: true }).click();
  await page.locator('span').filter({ hasText: 'Sinh viên' }).click();
  await page.getByRole('link', { name: 'Khoa Dược' }).click();
  await page.getByRole('link', { name: 'Giới thiệu', exact: true }).click();
  await page.getByRole('link', { name: 'Đào tạo', exact: true }).click();
  await page.getByRole('link', { name: 'Nghiên cứu', exact: true }).click();
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.getByRole('link', { name: 'Liên hệ', exact: true }).click();
  await page.getByRole('link', { name: 'Giới thiệu', exact: true }).click();
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.getByRole('link', { name: 'Xem Thêm' }).first().click();
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.getByRole('link', { name: 'TRƯỜNG ĐẠI HỌC PHENIKAA', exact: true }).click();
  await page.getByRole('link', { name: 'Khoa Kinh tế và Kinh doanh' }).click();
  await page.getByRole('link', { name: 'Sinh viên', exact: true }).click();
  await page.goto('https://fbe.phenikaa-uni.edu.vn/vi/category/sinh-vien');
  await page.locator('#areaHead01').getByRole('link', { name: 'Trường Đại học PHENIKAA', exact: true }).click();
  await page.goto('https://www.phenikaa-uni.edu.vn/vi');
});