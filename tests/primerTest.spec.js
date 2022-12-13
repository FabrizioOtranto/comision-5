const { test, expect } = require('@playwright/test');
const datos = require('../fixtures/data.json')

test.describe('Primer test', () => {
    const numeroRandom = Math.floor(Math.random() * 10000);

    test.beforeAll(async () => {
        await console.log('before all')
    })

    test.beforeEach(async ({ page }) => {
        await page.goto('');
        await page.locator('#user').fill(`${datos.username + numeroRandom}`);
        await page.locator('#pass').fill(datos.password);
        await page.locator(`[value="${datos.gender}"]`).check({ force: true });
        await page.locator('#day').selectOption(datos.day);
        await page.locator('#month').selectOption({ label: datos.month });
        await page.locator('#year').selectOption(datos.year);
        await page.locator('//button[@id="submitForm"]').click();
    })

    test('Deberia agregar 2 tareas y completar la segunda', async ({ page }) => {
        await page.locator('#todolistlink').click();
        await page.locator('#task').fill('Tarea 1');
        await page.locator('#sendTask').click();
        await page.locator('#task').fill('Tarea 2');
        await page.locator('#sendTask').click();
        await page.locator('//p[text()="Tarea 2"]').click();
        await page.locator('#completed').click();
        await expect(page.locator('p')).toHaveText('Tarea 2');
        await expect(page.locator('p')).toHaveAttribute('style', 'text-decoration: line-through;')
    });

    test.afterEach(async () => {
        await console.log('after each');
    });

    test.afterAll(async () => {
        await console.log('after all')
    })
})